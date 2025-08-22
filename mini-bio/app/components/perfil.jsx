'use client';
import Image from 'next/image';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/malu.png"
          alt="minha foto"
          width={150}
          height={150}
        />
      </div>
      <h1 className={styles.name}>Malu de Faria Neves Bezerra</h1>
      <p className={styles.bio}>
           Cursando Ciência da Computação e explorando o mundo da programação.
           Amo Tecnologia.
        
      </p>
    </div>
  );
};

export default Profile;
