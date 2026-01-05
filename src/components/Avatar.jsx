import React, { useState, useEffect, useRef } from 'react';

// --- Style-derived Constants ---
const HEAD_WIDTH = 100;
const HEAD_HEIGHT = 100;
const HEAD_TOP_OFFSET = 50;

const EYE_SOCKET_WIDTH = 30;
const EYE_SOCKET_HEIGHT = 35;
const EYE_SOCKET_TOP_PERCENT = 0.30;
const EYE_SOCKET_LEFT_PERCENT = 0.20;
const EYE_SOCKET_RIGHT_PERCENT = 0.20;

const LEFT_EYE_SOCKET_TOP = HEAD_HEIGHT * EYE_SOCKET_TOP_PERCENT;
const LEFT_EYE_SOCKET_LEFT = HEAD_WIDTH * EYE_SOCKET_LEFT_PERCENT;

const RIGHT_EYE_SOCKET_TOP = HEAD_HEIGHT * EYE_SOCKET_TOP_PERCENT;
const RIGHT_EYE_SOCKET_LEFT =
  HEAD_WIDTH * (1 - EYE_SOCKET_RIGHT_PERCENT) - EYE_SOCKET_WIDTH;

const PUPIL_WIDTH = 12;
const PUPIL_HEIGHT = 12;

const MAX_PUPIL_OFFSET_X = (EYE_SOCKET_WIDTH / 2) - (PUPIL_WIDTH / 2);
const MAX_PUPIL_OFFSET_Y = (EYE_SOCKET_HEIGHT / 2) - (PUPIL_HEIGHT / 2);

const MAX_AVATAR_TILT_ANGLE = 10;

const Avatar = () => {
  const [leftPupilTransform, setLeftPupilTransform] = useState(
    'translate(-50%, -50%)'
  );
  const [rightPupilTransform, setRightPupilTransform] = useState(
    'translate(-50%, -50%)'
  );
  const [avatarTiltTransform, setAvatarTiltTransform] = useState('');
  const avatarRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!avatarRef.current) return;

      const avatarRect = avatarRef.current.getBoundingClientRect();

      const avatarCenterX = avatarRect.left + avatarRect.width / 2;
      const avatarCenterY = avatarRect.top + avatarRect.height / 2;

      const deltaXAvatar = event.clientX - avatarCenterX;
      const deltaYAvatar = event.clientY - avatarCenterY;

      const rotateY = Math.max(
        -MAX_AVATAR_TILT_ANGLE,
        Math.min(
          MAX_AVATAR_TILT_ANGLE,
          (deltaXAvatar / (avatarRect.width / 2)) * MAX_AVATAR_TILT_ANGLE
        )
      );

      const rotateX = Math.max(
        -MAX_AVATAR_TILT_ANGLE,
        Math.min(
          MAX_AVATAR_TILT_ANGLE,
          (-deltaYAvatar / (avatarRect.height / 2)) * MAX_AVATAR_TILT_ANGLE
        )
      );

      setAvatarTiltTransform(
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      );

      const headActualLeft = (180 - HEAD_WIDTH) / 2;
      const headViewportX = avatarRect.left + headActualLeft;
      const headViewportY = avatarRect.top + HEAD_TOP_OFFSET;

      const updatePupil = (eyeX, eyeY, setTransform) => {
        const dx = event.clientX - eyeX;
        const dy = event.clientY - eyeY;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        const px = (dx / dist) * Math.min(dist, MAX_PUPIL_OFFSET_X);
        const py = (dy / dist) * Math.min(dist, MAX_PUPIL_OFFSET_Y);

        setTransform(
          `translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`
        );
      };

      updatePupil(
        headViewportX + LEFT_EYE_SOCKET_LEFT + EYE_SOCKET_WIDTH / 2,
        headViewportY + LEFT_EYE_SOCKET_TOP + EYE_SOCKET_HEIGHT / 2,
        setLeftPupilTransform
      );

      updatePupil(
        headViewportX + RIGHT_EYE_SOCKET_LEFT + EYE_SOCKET_WIDTH / 2,
        headViewportY + RIGHT_EYE_SOCKET_TOP + EYE_SOCKET_HEIGHT / 2,
        setRightPupilTransform
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const styles = {
    container: {
      width: 180,
      height: 220,
      position: 'relative',
      transform: avatarTiltTransform,
      transition: 'transform 0.1s ease-out',
    },
    head: {
      width: HEAD_WIDTH,
      height: HEAD_HEIGHT,
      backgroundColor: '#cccccc',
      borderRadius: '50%',
      position: 'absolute',
      top: HEAD_TOP_OFFSET,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 2,
    },
    hair: {
      width: 110,
      height: 65,
      backgroundColor: '#202020',
      borderRadius: '50px 50px 20px 20px',
      position: 'absolute',
      top: 22,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 3,
    },
    eyeSocket: {
      width: EYE_SOCKET_WIDTH,
      height: EYE_SOCKET_HEIGHT,
      backgroundColor: '#f0f0f0',
      borderRadius: '40%',
      position: 'absolute',
      zIndex: 1,
    },
    pupil: {
      width: PUPIL_WIDTH,
      height: PUPIL_HEIGHT,
      backgroundColor: '#202020',
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transition: 'transform 0.03s linear',
    },
    shoulders: {
      width: 160,
      height: 80,
      backgroundColor: '#202020',
      borderRadius: '30px 30px 0 0',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
    },
  };

  return (
    <div ref={avatarRef} style={styles.container}>
      <div style={styles.shoulders} />
      <div style={styles.hair} />
      <div style={styles.head}>
        <div
          style={{
            ...styles.eyeSocket,
            top: `${EYE_SOCKET_TOP_PERCENT * 100}%`,
            left: `${EYE_SOCKET_LEFT_PERCENT * 100}%`,
          }}
        >
          <div style={{ ...styles.pupil, transform: leftPupilTransform }} />
        </div>
        <div
          style={{
            ...styles.eyeSocket,
            top: `${EYE_SOCKET_TOP_PERCENT * 100}%`,
            right: `${EYE_SOCKET_RIGHT_PERCENT * 100}%`,
          }}
        >
          <div style={{ ...styles.pupil, transform: rightPupilTransform }} />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
