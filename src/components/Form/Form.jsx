import React from 'react';
import {AddForm} from "./AddForm/AddForm";
import {EditForm} from "./EditForm/EditForm";

export const Form = () => {
    return (
        <section className='section'>
            <div className='forms'>
                <AddForm/>
                <EditForm/>
            </div>
        </section>
    );
};
