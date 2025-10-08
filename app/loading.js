import styles from "./loading.module.scss"

export default function Loading() {
    return (
        <div className={styles.overlay}>
            <span className={styles.loader}></span>
        </div>
    )
}
