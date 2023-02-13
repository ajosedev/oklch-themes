import React from 'react';
import { AiFillStar, AiOutlineMinusCircle } from 'react-icons/ai';
import styles from '../styles/MockPage.module.css';

export function MockPage() {
    return (
        <section className={styles.container}>
            <p className={styles.text}>Text</p>
            <div className={styles.inline}>
                <button className={`${styles.button} ${styles.primaryButton}`}>
                    Button
                </button>
                <button
                    className={`${styles.button} ${styles.secondaryButton}`}
                >
                    Button
                </button>
                <button className={`${styles.button} ${styles.tertiaryButton}`}>
                    Button
                </button>
            </div>
            <div className={styles.inline}>
                <button className={`${styles.button} ${styles.primaryButton}`}>
                    <AiFillStar />
                </button>
                <button className={`${styles.button} ${styles.tertiaryButton}`}>
                    <AiFillStar />
                </button>
            </div>
            <a className={styles.link}>Link</a>
            <div className={styles.alert}>Alert</div>
            <div className={styles.inline}>
                <input className={styles.checkbox} type="checkbox" />
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked
                    readOnly
                />
            </div>
            <div className={styles.inline}>
                <input className={styles.radio} type="radio" />
                <input className={styles.radio} type="radio" checked readOnly />
            </div>
            <input className={styles.input} type="text" />
            <div className={styles.spinner} />
            <div className={styles.pill}>
                Pill <AiOutlineMinusCircle />
            </div>
        </section>
    );
}
