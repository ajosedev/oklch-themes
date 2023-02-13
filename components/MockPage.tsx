import React from 'react';
import styles from '../styles/MockPage.module.css';

export function MockPage() {
    return (
        <section className={styles.container}>
            <button className={styles.button}>Button</button>
            <button className={`${styles.button} ${styles.secondaryButton}`}>
                Button
            </button>
            <a className={styles.link}>Link</a>
        </section>
    );
}
