import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

export const Header = () => {
  return (
  <div className={styles.container}>
    <nav>
      <ul>
        <li>
          <Link className={styles.link} to="/list" >
            Список валют
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/convertor" >
            Конвертер валют
          </Link>
        </li>
      </ul>
    </nav>
  </div>
  )
}

