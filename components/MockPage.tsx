import React from 'react';
import styles from '../styles/MockPage.module.css';

export function MockPage() {
    return (
        <section>
            <button className={styles.button}>Button</button>
            <button className={styles.secondaryButton}>Button</button>
        </section>
    );
}
