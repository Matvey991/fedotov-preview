// import { classNames } from '@/shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
// import { memo, ReactNode } from 'react';
// import cls from './List.module.scss'
// import { Popover as HPopover } from '@headlessui/react'

// interface ListProps {
//     className?: string;
//     children: ReactNode;
// }

// export const List = memo((props: ListProps) => {

//     const { className } = props
//     const { t } = useTranslation()
//     return (
//         <HPopover className="relative">
//             <HPopover.Button>Solutions</HPopover.Button>

//             <HPopover.Panel className="absolute z-10">
//                 <ul>
//                     <li>
//                         123
//                     </li>
//                 </ul>
//             </HPopover.Panel>
//         </HPopover>
//     )
// });

// import { classNames } from '@/shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
// import { memo, ReactNode, useState } from 'react';
// import cls from './List.module.scss'
// import { Popover as HPopover } from '@headlessui/react'
// import { Hr } from '../Hr';

// interface ListProps {
//     className?: string;
//     children: ReactNode;
// }

// export const List = memo((props: ListProps) => {

//     const { className, children } = props
//     const { t } = useTranslation()

//     const [open, setOpen] = useState(false)

//     const onToggle = () => {
//         setOpen(prev => !prev)
//     }

//     return (
//         <ul className={classNames(cls.List, {}, [className])}>
//             <Hr width={350} />
//             <p onClick={onToggle}>123</p>
//             <Hr width={350} />
//             {open &&
//                 <li className={cls.li}>

//                     {children}
//                 </li>
//             }
//         </ul>
//     )
// });import React, { useState } from 'react';


import { useState } from 'react';
import cls from './List.module.scss'; // Импортируйте CSS файл
import * as Hooks from '../hooks'
import { Hr } from '../../Hr';

interface ListItemProps {
    title: string;
    content: string;
}

interface ListProps {
    items: ListItemProps[];
}

export const List = (props: ListProps) => {
    const { items } = props

    const { toggleItem, openIndex } = Hooks.useListHook()

    return (
        <div>
            {items.map((item, index) => (
                <div className={cls.List} key={index}>
                    <Hr width={300} />
                    <h4
                        className={openIndex === index ? cls.headingActive : cls.heading}
                        onClick={() => toggleItem(index)}
                    >
                        {item.title}
                    </h4>
                    <Hr width={300} />
                    {openIndex === index && (
                        <div className={cls.content}>
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
