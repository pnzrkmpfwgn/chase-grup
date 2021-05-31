import styles from './contactSection.module.css';

export default function Contact(){
    return <div className={styles.adress_container} id="İletişim" >
        {/*Dinamiğe dönüştürülecek içerik*/}
        <h3 className={styles.contact} > İletişim </h3>
        <address>
            <strong>Adres: </strong> <p>Yasemin Sokak Atlantic Avenue B-1  No:42C</p>
            <strong>Telefon(Sabit):</strong> <p>0 392 444 26 46</p>
            <strong>Telefon(Mobil):</strong> <p>0 (539) 108 24 44</p>
            <strong>Telefon(Mobil):</strong> <p>0 (539) 108 24 44</p>
        </address>
        <a href="facebook.com">asd<i></i></a>
        <a href="instagram.com">asdd<i></i></a>
    </div>
}