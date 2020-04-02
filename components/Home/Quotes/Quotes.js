import { useRouter } from 'next/router';
import useSWR from 'swr';

function fetcher(url) {
    return fetch(url).then(r => r.json());
}

const quote = () => {
    const { query } = useRouter();
    const { data, error } = useSWR(
        `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
        fetcher
    );
    // The following line has optional chaining, added in Next.js v9.1.5,
    // is the same as `data && data.author`
    const author = data?.author;
    let quote = data?.quote;

    if (!data) quote = 'Loading...';
    if (error) quote = 'Failed to fetch the quote.';
    return (
        <div>
            <p style={{ margin: 0 }}>{quote}</p>
            <p style={{ margin: 0 }}>{author}</p>
        </div>

    )
}

export default quote;