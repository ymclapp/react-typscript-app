import React, { useRef } from 'react';
import '../components/styles.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;  //hover over setTodo in app.tsx and copy the type
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);  //hovered over the ref item below to find the type

    return (
        <form className='input' onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur()
        }}>
            <input
                ref={inputRef}
                type='input'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Enter a task'
                className='input__box'
            />
            <button className='input_submit' type='submit'>GO

            </button>
        </form>
    )
};

export default InputField;
