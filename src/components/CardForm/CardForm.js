import styles from './CardForm.module.scss'
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const columnId = props.columnId;
        dispatch({type: 'ADD_CARD', payload: {title, columnId} });
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.cardForm}>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm;