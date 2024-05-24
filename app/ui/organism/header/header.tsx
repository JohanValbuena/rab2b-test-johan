'use client';

import Link from "next/link"
import styles from "./header.module.scss"
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
export default function Header() {
    const pathname = usePathname();
    return (
        <div className={styles.container}>
            <div className={styles.dataContainer}>
                <Link href={'/'} className={
                    clsx((styles.btn),
                        pathname === '/' && styles.active

                    )}>Module 1 </Link>
            </div>
            <div className={styles.dataContainer}>
                <Link href={'/module-2'} className={
                    clsx((styles.btn),
                        pathname === '/module-2' && styles.active

                    )}>Module 2 </Link>
            </div>
        </div>
    )
}