const React = require('react');
const ProfessionalSummaryCss = require('./professional-summary.scss');

const GlobalContext = require('./../../../../contexts/GlobalContext.tsx');

module.exports = (props) => {

    const globalCTX = React.useContext(GlobalContext);
    const rootClassname = globalCTX.theme === 'dark' ? 'dsr-pro-summary--dark' : 'dsr-pro-summary'

    return <section className={rootClassname}>
        <img src="/selfie.png" className={'dsr-pro-summary__selfie-img'} alt={'Picture of Daniel Shuster (left) feeding a carrot to a horse (right)'}/>
        <h4 className={'dsr-pro-summary__name'}>Daniel Shuster</h4>
        <h5 className={'dsr-pro-summary__title'}>Senior Software Engineer</h5>
        <p className={'dsr-pro-summary__summary'}>
            I am a Full Stack Web Developer with a bachelors in Computer Science and 10+ years experience. My current area of focus is frontend, mobile, and desktop application development, though I have expertise on the LAMP stack as well. As a Lead Frontend Engineer, I frequently collaborate with UX and product managers in order to finalize designs, scope efforts, and realize business goals. Along the way I will be utilizing coding best practices, leaning on industry standards, and implementing clean code & architecture. When Web Development is not involved, I'm busy being a full time cat dad, wood-working enthusiast, and trail hiker.
        </p>
    </section>;
};

module.exports.Style = () => <style>{ProfessionalSummaryCss}</style>;
