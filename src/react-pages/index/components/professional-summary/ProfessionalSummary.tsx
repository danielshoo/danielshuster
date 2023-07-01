const React = require('react');
const ProfessionalSummaryCss = require('./professional-summary.scss');

const GlobalContext = require('./../../../../contexts/GlobalContext.tsx');

module.exports = (props) => {

    const globalCTX = React.useContext(GlobalContext);
    const rootClassname = globalCTX.theme === 'dark' ? 'dsr-pro-summary--dark' : 'dsr-pro-summary'

    return <section className={rootClassname}>
        <div className={'dsr-pro-summary__selfie-img'} alt={'Daniel Shuster'}/>
        <h4 className={'dsr-pro-summary__name'}>Daniel Shuster</h4>
        <h5 className={'dsr-pro-summary__title'}>Senior Software Engineer</h5>
        <p className={'dsr-pro-summary__summary'}>
            I am a Full Stack Web Developer with a bachelors in Computer Science and 10+ years experience. My current area of focus is frontend, mobile, and desktop application development, though I have extensive backend development & database experience. As a Lead Frontend Engineer guiding a team of three, I enjoy collaborating closely with UX and product managers to realize pixel perfect designs and bring an enjoyable user experience to high traffic pages. When there there is a challenge to be met, or a problem to solve, I'm interested in taking it on utilizing best practices, leaning on industry standards, and implementing clean code / architecture. When Web Development is not involved, I'm busy being a full time cat dad and wood-working enthusiast.
        </p>
    </section>;
};

module.exports.Style = () => <style>{ProfessionalSummaryCss}</style>;