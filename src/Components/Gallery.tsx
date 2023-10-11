import React, {useEffect, useState} from "react";

interface Props {
    breeds: string;
}

const Gallery = ({breeds}: Props) => {
    const [imgBreed, setImgBreed] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        if (!breeds) return;
        setLoading(true);
        fetch(`https://dog.ceo/api/breed/${breeds}/images/random/20`)
            .then(res => res.json())
            .then(res => {
                setImgBreed(res.message)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
                setLoading(false)
            });
    }, [breeds]);

    const imagesBreed = imgBreed.map((src, index) => {
        return <div key={src}
                    className={index % 2 === 0 ? 'relative aspect-w-16 aspect-h-9' : 'relative aspect-w-1 aspect-h-1'}>
            <img className="w-full object-cover rounded-lg" src={src} alt={src}/>
        </div>
    });

    return <>
        {!loading ?
            <div className="columns-3xs gap-8 space-y-8 mt-8">
                {imagesBreed}
            </div>
            : <div className="animate-pulse columns-3xs gap-8 space-y-8 mt-8">
                <div className="rounded-lg bg-slate-200 h-80 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-52 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-80 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-52 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-80 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-52 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-80 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-52 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-80 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-52 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-80 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-52 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-80 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-52 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-80 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-52 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-80 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-52 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-80 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-52 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-80 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-52 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-80 w-72 "></div>
                <div className="rounded-lg bg-slate-200 h-52 w-72 "></div>
            </div>}


    </>
}
export default Gallery