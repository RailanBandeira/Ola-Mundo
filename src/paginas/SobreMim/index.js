import styles from './SobreMim.module.css';

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.jpeg"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Railan Andrade Bandeira!
            </h3>

            <img
                src={fotoSobreMim}
                alt='Foto de Railan Andrade Bandeira'
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou aluno de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou no início de 2024, quando fiz o curso de JavaScript com o professor Gustavo Guanabara no Youtube. Eu aprendi JavaScript, HTML e CSS e mais tecnologias como TypeScript e React.js. Eu gosto muito de estudar programação e pretendo trabalhar na área.
            </p>

            <p className={styles.paragrafo}>
                Desde então, tem sido apenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de ter a oportunidade de trazer esses conteúdos ricos e encantadores para você. Espero que aprenda bastante!
            </p>
        </PostModelo>
    )
}