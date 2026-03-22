import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowPointer,
    faCircleCheck,
    faGift,
    faHandPointer,
    faHouseChimney,
    faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import React, {
    Fragment,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import Cozinha from "./assets/Cozinha";

interface ItemInterface {
    img: string;
    link: string;
}

interface SecaoInterface {
    titulo: string;
    img: string | React.ComponentType;
    lista: ItemInterface[];
}

const itensCozinha = [
    { img: "/itens/item1.png", link: "https://a.co/d/0GJhQWr" },
    { img: "/itens/item2.png", link: "https://a.co/d/8aVnetd" },
    { img: "/itens/item3.png", link: "https://a.co/d/5Ng2kx0" },
    { img: "/itens/item4.png", link: "https://a.co/d/24GhebR" },
    { img: "/itens/item5.png", link: "https://a.co/d/azlXxV5" },
    { img: "/itens/item6.png", link: "https://a.co/d/cVe8MBu" },
    { img: "/itens/item7.png", link: "https://a.co/d/hxNwkRk" },
    { img: "/itens/item8.png", link: "https://a.co/d/2xgxGbw" },
    { img: "/itens/item9.png", link: "https://a.co/d/b4vTyDv" },

    { img: "/itens/item10.png", link: "https://a.co/d/6v5uczJ" },
    { img: "/itens/item11.png", link: "https://a.co/d/4FKU9Oz" },
    { img: "/itens/item12.png", link: "https://a.co/d/1s4D0PE" },
    { img: "/itens/item13.png", link: "https://a.co/d/cKcgvop" },
    { img: "/itens/item14.png", link: "https://a.co/d/aut1i2c" },
    { img: "/itens/item15.png", link: "https://a.co/d/9VJQET5" },
    { img: "/itens/item16.png", link: "https://a.co/d/f86dywP" },
    { img: "/itens/item17.png", link: "https://a.co/d/bfhjoQB" },
    { img: "/itens/item18.png", link: "https://a.co/d/54ezO4l" },

    { img: "/itens/item19.png", link: "https://a.co/d/bFrrUKt" },
    { img: "/itens/item20.png", link: "https://a.co/d/bcM33W0" },
    { img: "/itens/item21.png", link: "https://a.co/d/4TFqCVS" },
    { img: "/itens/item22.png", link: "https://a.co/d/dfwWixM" },
    { img: "/itens/item23.png", link: "https://a.co/d/hlLxsPc" },
    { img: "/itens/item24.png", link: "https://a.co/d/3zMorwk" },
    { img: "/itens/item25.png", link: "https://a.co/d/esY9CK8" },
    { img: "/itens/item26.png", link: "https://a.co/d/dwKIP2F" },
    { img: "/itens/item27.png", link: "https://a.co/d/c3Fse2e" },

    { img: "/itens/item28.png", link: "https://a.co/d/dqFIowv" },
    { img: "/itens/item29.png", link: "https://a.co/d/2homcG5" },
    { img: "/itens/item30.png", link: "https://a.co/d/eclKQnA" },
    { img: "/itens/item31.png", link: "https://a.co/d/2CuZb4k" },
    { img: "/itens/item32.png", link: "https://a.co/d/fnFTYiy" },
    { img: "/itens/item33.png", link: "https://a.co/d/gdV391h" },
    { img: "/itens/item34.png", link: "https://a.co/d/730xFk7" },
    { img: "/itens/item35.png", link: "https://a.co/d/b2Joc1g" },
    { img: "/itens/item36.png", link: "https://a.co/d/9ZJQREp" },

    { img: "/itens/item37.png", link: "https://a.co/d/cVerSez" },
    { img: "/itens/item38.png", link: "https://a.co/d/93YZNv2" },
    { img: "/itens/item39.png", link: "https://a.co/d/3691LLJ" },
    { img: "/itens/item40.png", link: "https://a.co/d/aveIa8A" },
    { img: "/itens/item41.png", link: "https://a.co/d/8yO2OPi" },
    { img: "/itens/item42.png", link: "https://a.co/d/dsh8BJQ" },
    { img: "/itens/item43.png", link: "https://a.co/d/6wSMbso" },
    { img: "/itens/item44.png", link: "https://a.co/d/60ZfVh4" },
    { img: "/itens/item45.png", link: "https://a.co/d/12chQjJ" },

    { img: "/itens/item46.png", link: "https://a.co/d/azE5oeU" },
    { img: "/itens/item47.png", link: "https://a.co/d/c2HNWgN" },
    { img: "/itens/item48.png", link: "https://a.co/d/26LrUoA" },
    { img: "/itens/item49.png", link: "https://a.co/d/8ELEE1P" },
    { img: "/itens/item50.png", link: "https://a.co/d/avQVJz2" },
    { img: "/itens/item51.png", link: "https://a.co/d/cls16YN" },
    { img: "/itens/item52.png", link: "https://a.co/d/4sMOQ6N" },
    { img: "/itens/item53.png", link: "https://a.co/d/4zjZ7be" },
];
const itensSala = [
    { img: "/itens/item54.jpg", link: "https://a.co/d/fgfBWea" },
    { img: "/itens/item55.png", link: "https://a.co/d/aJFrnON" },
    { img: "/itens/item56.png", link: "https://a.co/d/20hlUVz" },
    { img: "/itens/item57.png", link: "https://a.co/d/1apkNfM" },
];
const itensBanheiro = [
    { img: "/itens/item58.png", link: "https://a.co/d/5nUpnkh" },
    { img: "/itens/item59.png", link: "https://a.co/d/gMzwApj" },
    { img: "/itens/item60.png", link: "https://a.co/d/4Xuiz5x" },
    { img: "/itens/item61.png", link: "https://a.co/d/b607NJt" },
    { img: "/itens/item62.png", link: "https://a.co/d/6vQncRk" },
    { img: "/itens/item63.png", link: "https://a.co/d/0jlmjEe" },
    { img: "/itens/item64.png", link: "https://a.co/d/4dKnuOy" },
];
const itensQuarto = [
    { img: "/itens/item65.png", link: "https://a.co/d/fWibduC" },
    { img: "/itens/item66.png", link: "https://a.co/d/da5J5SM" },
    { img: "/itens/item67.png", link: "https://a.co/d/0jcClCV0" },
    { img: "/itens/item68.png", link: "https://a.co/d/1fwyaOy" },
    { img: "/itens/item69.png", link: "https://a.co/d/emu56VP" },
    { img: "/itens/item70.png", link: "https://a.co/d/0ZpcgY6" },
    { img: "/itens/item71.png", link: "https://a.co/d/7VASify" },
    { img: "/itens/item72.png", link: "https://a.co/d/hOj3QOw" },
    { img: "/itens/item73.png", link: "https://a.co/d/1PcxHEZ" },
];
const itensServico = [
    { img: "/itens/item74.png", link: "https://a.co/d/3ymBguN" },
    { img: "/itens/item75.png", link: "https://a.co/d/4sWJeyW" },
    { img: "/itens/item76.png", link: "https://a.co/d/cR3xmYB" },
    { img: "/itens/item77.png", link: "https://a.co/d/2mGa0lh" },
    { img: "/itens/item78.png", link: "https://a.co/d/3YXYRLx" },
    { img: "/itens/item79.png", link: "https://a.co/d/cpi4Ium" },
    { img: "/itens/item80.png", link: "https://a.co/d/fJCGbTj" },
];

const secoes = [
    { titulo: "Presentes para Cozinha", img: Cozinha, lista: itensCozinha },
    {
        titulo: "Presentes para Sala de Estar",
        img: "/sala-estar.png",
        lista: itensSala,
    },
    {
        titulo: "Presentes para o Banheiro",
        img: "/banheiro.png",
        lista: itensBanheiro,
    },
    {
        titulo: "Presentes para o Quarto",
        img: "/quarto.png",
        lista: itensQuarto,
    },
    {
        titulo: "Presentes para área de Serviço",
        img: "/servico.png",
        lista: itensServico,
    },
];

const Item = React.memo(
    ({
        img,
        index,
        link,
    }: {
        img: string;
        index: string | number;
        link: string;
    }) => {
        return (
            <a href={link} target="_blank" className="lista-presentes__item">
                <img src={img} alt={"Produto" + index} loading="lazy" />
            </a>
        );
    },
);
const ListaItens = React.memo(({ lista }: { lista: ItemInterface[] }) => {
    return (
        <div className="lista-presentes__lista">
            <h2>Jairo e Sthefane</h2>

            <div
                className={`lista-presentes__lista-container ${lista.length < 7 ? "duas-colunas" : ""}`}
            >
                {lista.map((value, ind) => (
                    <Item
                        img={value.img}
                        link={value.link}
                        index={ind}
                        key={ind}
                    />
                ))}
            </div>

            <p>
                Clique no presente{" "}
                <span>
                    <FontAwesomeIcon icon={faHandPointer} />
                </span>
            </p>
        </div>
    );
});
const GridItens = React.memo(
    ({ lista }: { lista: { img: string; link: string }[] }) => {
        return (
            <>
                {Array.from({ length: Math.ceil(lista.length / 9) }).map(
                    (_, i) => (
                        <ListaItens
                            lista={lista.slice(i * 9, (i + 1) * 9)}
                            key={i}
                        />
                    ),
                )}
            </>
        );
    },
);
const SecaoTitulo = ({
    titulo,
    Img,
}: {
    titulo: string;
    Img: string | React.ComponentType;
}) => {
    return (
        <div className="titulo-presentes" id={titulo.replace(/\s/g, "")}>
            <p>{titulo}</p>
            <div className="titulo-presentes--img">
                {typeof Img === "string" ? (
                    <img src={Img} alt="Logo Seção" />
                ) : (
                    <Img />
                )}
            </div>
        </div>
    );
};
const Secoes = React.memo(({ secoes }: { secoes: SecaoInterface[] }) => {
    return secoes.map((v) => (
        <Fragment key={v.titulo}>
            <SecaoTitulo Img={v.img} titulo={v.titulo} />
            <GridItens lista={v.lista} />
        </Fragment>
    ));
});

const ListaPresentes = React.memo(({ back }: { back: () => void }) => {
    return (
        <motion.div
            className="lista-presentes"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="background-presentes">
                <div className="background-presentes__flor">
                    <img src="/flor-azul.png" alt="Imagem Flor" />
                </div>
                <div className="background-presentes__flor">
                    <img src="/flor-azul.png" alt="Imagem Flor" />
                </div>
                <div className="background-presentes__flor">
                    <img src="/flor-azul.png" alt="Imagem Flor" />
                </div>
                <div className="background-presentes__flor">
                    <img src="/flor-azul.png" alt="Imagem Flor" />
                </div>
            </div>

            <div className="to-index">
                <a href="#indice">
                    <FontAwesomeIcon icon={faHouseChimney} />
                </a>
            </div>
            <motion.div className="close-button" onTap={back}>
                <button type="button" title="Voltar">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </motion.div>

            <div className="lista-presentes__container">
                <div className="titulo-presentes">
                    <p>Lista de Presentes</p>
                    <div className="titulo-presentes--img">
                        <img src="logo-j.png" alt="Logo Jairinho" />
                    </div>
                    <p>de Casamento</p>
                </div>

                <div className="titulo-presentes presentes-lista" id="indice">
                    <p>Índice</p>

                    <ul>
                        {secoes.map((v, i) => (
                            <li key={v.titulo}>
                                <span>{i + 1}</span>
                                <a href={`#${v.titulo.replace(/\s/g, "")}`}>
                                    {v.titulo}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <Secoes secoes={secoes} />

                <div className="titulo-presentes">
                    <p>Pix dos Noivos</p>
                    <div className="titulo-presentes--img">
                        <img src="pix-img.png" alt="QRCODE PIX" />
                    </div>
                    <span>CHAVE PIX: 31993039823</span>
                    <span>STHEFANE P. GENERAL</span>
                </div>
            </div>
        </motion.div>
    );
});

function App() {
    const [videoRect, setVideoRect] = useState<DOMRect | null>(null);
    const [linkRect, setLinkRect] = useState<DOMRect | null>(null);
    const [showVideo, setShowVideo] = useState(false);
    const [showPresentes, setShowPresentes] = useState(false);
    const [onCanPlay, setOnCanPlay] = useState(false);

    const videoRef = useRef<HTMLDivElement>(null);
    const linkRef = useRef<HTMLDivElement>(null);

    const back = useCallback(() => setShowPresentes(false), []);
    useEffect(() => {
        if (videoRef.current && linkRef.current) {
            const rectVideo = videoRef.current.getBoundingClientRect();
            setVideoRect(rectVideo);

            const rectLink = linkRef.current.getBoundingClientRect();
            setLinkRect(rectLink);
        }
    }, []);
    useEffect(() => {
        if (!videoRect && !linkRect && onCanPlay)
            setTimeout(() => setShowVideo(true), 500);
    }, [videoRect, linkRect, onCanPlay]);
    return (
        <>
            <main>
                <AnimatePresence>
                    {videoRect && linkRect && (
                        <motion.div
                            className="coach"
                            key={"coach"}
                            exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        >
                            <motion.span
                                initial={{ opacity: 0, x: 0, y: 0, scale: 1 }}
                                animate={{
                                    opacity: 1,
                                    x: [
                                        0,
                                        videoRect.left + videoRect.width / 2,
                                        videoRect.left + videoRect.width / 2,
                                        videoRect.left + videoRect.width / 2,
                                        linkRect.left + linkRect.width / 2,
                                        linkRect.left + linkRect.width / 2,
                                    ],
                                    y: [
                                        0,
                                        videoRect.top + videoRect.height / 2,
                                        videoRect.top + videoRect.height / 2,
                                        videoRect.top + videoRect.height / 2,
                                        linkRect.top + linkRect.height / 2,
                                        linkRect.top + linkRect.height / 2,
                                    ],
                                    scale: [
                                        1, 1, 1, 0.5, 1, 1, 1, 1, 1, 0.5, 1,
                                    ],
                                }}
                                transition={{ duration: 3 }}
                                onAnimationComplete={() => {
                                    setVideoRect(null);
                                    setLinkRect(null);
                                }}
                            >
                                <FontAwesomeIcon icon={faArrowPointer} />
                            </motion.span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="background">
                    <div className="background__flor">
                        <img src="/flor3.png" alt="Imagem Flor" />
                    </div>
                    <div className="background__tinta1">
                        <img src="/tinta.png" alt="Imagem Tinta" />
                    </div>
                    <div className="background__tinta2">
                        <img src="/tinta.png" alt="Imagem Tinta" />
                    </div>
                </div>

                <div className={`video ${showVideo ? "hidden" : ""}`}>
                    <AnimatePresence mode="wait">
                        <div
                            className={`video__video ${!showVideo ? "video__video--none" : ""}`}
                        >
                            <video
                                src="/video-convite.mp4"
                                autoPlay
                                preload="auto"
                                muted
                                onCanPlayThrough={() => setOnCanPlay(true)}
                            ></video>
                        </div>
                        {!showVideo && (
                            <motion.div
                                className="video__presente"
                                ref={videoRef}
                                onTap={() => setShowVideo(true)}
                                whileTap={{ scale: 0.9 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                key={"presente-container"}
                            >
                                <motion.div
                                    className="video__presente-fita--horizontal"
                                    exit={{ x: "-100%" }}
                                    transition={{ duration: 1 }}
                                ></motion.div>
                                <motion.div
                                    className="video__presente-fita--vertical"
                                    exit={{ y: "100%" }}
                                    transition={{ duration: 1 }}
                                >
                                    <div className="video__presente-laco">
                                        <img src="/laco.png" alt="" />
                                    </div>
                                </motion.div>

                                <div className="video__presente-logo">
                                    <img src="/logo-j.png" alt="" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="links">
                    <div className="link">
                        <a
                            href="https://maps.app.goo.gl/4jXy1hhEn9iURXkh6"
                            target="_blank"
                        >
                            <span>
                                <FontAwesomeIcon icon={faMapLocationDot} />
                            </span>

                            <h2>Localização</h2>
                        </a>
                    </div>
                    <div className="link" ref={linkRef}>
                        <a href="https://api.whatsapp.com/send/?phone=5531993039823&text=Eu+confirmo+a+minha+presen%C3%A7a+no+casamento+do+Jairo+e+Sthefane&type=phone_number&app_absent=0">
                            <span>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </span>

                            <h2>Confirmar a presença</h2>
                        </a>
                    </div>
                    <div className="link">
                        <motion.button
                            type="button"
                            title="Sugestões Presentes"
                            onTap={() => setShowPresentes(true)}
                        >
                            <span>
                                <FontAwesomeIcon icon={faGift} />
                            </span>

                            <h2>Sugestão de presentes</h2>
                        </motion.button>
                    </div>
                </div>
            </main>

            <AnimatePresence mode="wait">
                {showPresentes && <ListaPresentes back={back} />}
            </AnimatePresence>
        </>
    );
}

export default App;
