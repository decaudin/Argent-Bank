import { useEffect } from 'react';
import Banner from '../../components/features/Home/Banner';
import HomeFeatures from '../../components/features/Home/HomeFeatures';

const Home = () => {

    useEffect(() => {window.scrollTo(0, 0);}, []);

    return (
        <>
            <Banner />
            <HomeFeatures />
        </>
    )
}

export default Home;