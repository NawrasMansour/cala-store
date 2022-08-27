import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Transition } from '@headlessui/react';
import { useRef } from 'react';
import Alert from '@/scripts/shared/Alert/Alert';

const Fade = ({ children, show }) => {
    return (
        <Transition
            show={show}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            {children}
        </Transition>
    );
};

export type FlassMessage = string | undefined | null;

export interface ILayout {
    title?: string;
    appName?: string;
    flash?: {
        success: FlassMessage;
        failure: FlassMessage;
        info: FlassMessage;
    };
}

const alertClass = "fixed inset-0 justify-center w-full max-h-10 z-50 rounded-none font-semibold text-white";
const dangerStyle = {backgroundColor:"rgba(255,0,0,0.7)",border:"red"};
const successStyle = {backgroundColor:"rgba(0,255,2,0.8)",border:"green"};
const infoStyle = {backgroundColor:"rgba(0,0,255,0.7)",border:"blue"};

const FlashLayout: React.FC<ILayout> = ({ children, ...props }:any) => {
    const [timer, setTimer] = useState(true);
    const timerId = useRef();

    const { title, flash = {}, appName } = props;

    //@ts-ignore
    const { success, failure, info, timestamp } = flash;

    useLayoutEffect(() => {
        if (success || failure || info) {
            if (timerId.current) return;
            setTimer(true);
            timerId.current = setTimeout(() => {
                setTimer(false);
                timerId.current = 0;
            }, 4000);
        } else if (!timerId.current) {
            setTimer(false);
        }
        return () => {
            clearTimeout(timerId.current);
            timerId.current = 0;
        };
    }, [timestamp]);

    return (
        <div className="w-full">
            <Helmet>
                <title>{title || appName}</title>
            </Helmet>
            {failure && (
                <Fade show={timer}>
                    <Alert styleContent={dangerStyle} alertClass={alertClass}>
                        {failure}
                    </Alert>
                </Fade>
            )}
            {success && (
                <Fade show={timer}>
                    <Alert styleContent={successStyle} alertClass={alertClass}>
                        {success}
                    </Alert>
                </Fade>
            )}
            {info && (
                <Fade show={timer}>
                    <Alert styleContent={infoStyle}  alertClass={alertClass}>
                        {info}
                    </Alert>
                </Fade>
            )}
        </div>
    );
};

export default FlashLayout;
