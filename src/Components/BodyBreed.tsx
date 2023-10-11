import React, {useEffect, useState} from "react";
import Dropdown from "./Dropdown";
import Gallery from "./Gallery";


const BodyBreed = () => {
    const [dataBreeds, setDataBreeds] = useState<[]>([]);
    const [breed, setBreed] = useState<string>('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(res => res.json())
            .then(res => setDataBreeds(res.message))
    }, []);


    const handleBreedSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === 'Seleziona razza') return
        setBreed(event.target.value)
    }

    return <>
        <div className="md:container md:mx-auto  max-w-7xl p-6 lg:px-8">
            <div className="-m-1.5 p-1.5">
                <div className="mx-auto py-10 ">
                    <div className="sm:mb-8 sm:flex sm:justify-center">
                        <div className="px-3 py-1 text-sm leading-6">
                            <h2 className="text-sky-700 text-2xl my-2">Trova il tuo cane preferito!</h2>
                            <Dropdown dataBreeds={dataBreeds} handleBreedSelected={handleBreedSelected}/>
                        </div>
                    </div>
                    <Gallery breeds={breed}/>
                </div>
            </div>
        </div>
    </>
}

export default BodyBreed;