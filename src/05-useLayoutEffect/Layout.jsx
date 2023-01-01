import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";


const qry = [
    "Peru",
    "Cajamarca",
    "Lima",
    "Argentina",
    "Bolivia",
    "Chile",
    "Colombia",
    "Ecuador",
    "Brazil",
];

export const Layout = () => {

    const { counter, increment, decrement, reset } = useCounter(0);

    const n = counter >= 0 && counter < qry.length ? counter : 0;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NxlFoVAsM7LUFrCcjW9QyWvzhcWj18jY&q=${qry[n]}&limit=1`;

    console.log(counter, url);
    const { data, isLoading, hasError } = useFetch(url);

    // console.log(data);
    const { username: author, title: quote } = !!data && data.data[0];

    console.log({ author, quote });

    return (
        <>
            <h1>Breaking Bad</h1>
            <br />
            <button
                disabled={isLoading}
                className="btn btn-primary mb-4"
                onClick={() => {
                    increment(1);
                    if (counter > qry.length) reset();
                }}>
                Next quote
            </button>
            <br />
            {
                isLoading ?
                    <LoadingQuote /> :
                    <Quote
                        author={author}
                        quote={quote} />
            }


        </>
    );
};
