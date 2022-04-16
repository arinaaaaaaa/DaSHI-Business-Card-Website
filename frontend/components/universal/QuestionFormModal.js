import FeedbackForm from "./FeedbackForm";
import styles from '../../styles/components/QuestionFormModal.module.css';
import { useState } from "react";

export default function QuestionFormModal(props) {

    return props.isVisible && (
        <div className={styles.feedbackformwrapper}>
            <FeedbackForm updater={props.updater} content={props.content} close={props.close}/>
        </div>
    )
}