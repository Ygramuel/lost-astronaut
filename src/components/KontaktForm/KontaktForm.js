import React from "react"
import style from "./KontaktForm.module.less"

export default () =>
    <form className={style.form} name="contact" data-netlify="true">

        <label className={style.name}><p>Name</p><input type="text" name="name"/></label>

        <label className={style.mail}><p>E-Mail</p><input type="email" name="email"/></label>

        <label className={style.message}><p>Nachricht</p><textarea name="message"></textarea></label>

        <button className={style.button} type="submit">Absenden</button>

    </form>
