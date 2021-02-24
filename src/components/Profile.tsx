import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/guijun13.png" alt="profile" />
      <div>
        <strong>Guilherme Jun</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
