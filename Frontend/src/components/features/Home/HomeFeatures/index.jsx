import FeatureCard from '../../../ui/FeatureCard';
import ChatIcon from '../../../../assets/icon-chat.png';
import MoneyIcon from '../../../../assets/icon-money.png';
import SecurityIcon from '../../../../assets/icon-security.png';
import './index.scss';

const HomeFeatures = () => {

    return (
        <div className='features-wrapper'>
            <h2 className='sr-only'>Features</h2>
            <FeatureCard icon={ChatIcon} title='You are our #1 priority' text='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.' />
            <FeatureCard icon={MoneyIcon} title='More savings means higher rates' text='The more you save with us, the higher your interest rate will be!' />
            <FeatureCard icon={SecurityIcon} title='Security you can trust' text='We use top of the line encryption to make sure your data and money is always safe.' />
        </div>
    )
}

export default HomeFeatures;