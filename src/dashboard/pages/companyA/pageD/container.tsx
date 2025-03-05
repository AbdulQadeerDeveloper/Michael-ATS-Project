import React from 'react';
import Contact from './receiver';
import MailSentCard from './mailSent';
import MailEditor from './mail';

function Container() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 p-4 max-w-[1920px] w-full mx-auto">
            <div className="col-span-1">
                <Contact/>
                <MailSentCard />
            </div>
            <div className="col-span-2">
                <MailEditor />
            </div>
        </div>
    );
}

export default Container;

