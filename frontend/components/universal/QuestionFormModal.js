import FeedbackForm from "./FeedbackForm";
import { useTransition, animated } from "react-spring";
import styles from '../../styles/components/QuestionFormModal.module.css';

export default function QuestionFormModal(props) {

    // const animationConfig = useTransition({
    //     from: {opacity: 0},
    //     to: {opacity: 1},
    //     reset: true,
    //     onRest: () => {

    //     }
    // })

    return props.isVisible && (
        <animated.div className={styles.feedbackformwrapper}>
            <FeedbackForm updater={props.updater} content={props.content} close={props.close}/>
        </animated.div>
    )
}