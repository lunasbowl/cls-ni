import React from "react";
import { useTranslation } from "react-i18next";
import './Events.css';

import { Link } from "react-router-dom";

function Events () {

    const { t } = useTranslation();

    const links = [
        {
            to: '/event-1',
            name: 'Event-1'
        },
        {
            to: '/event-2',
            name: 'Event-2'
        }
    ];

    return (
        <div className="event-section">
            <div className="recent-events">
                <h1>{t('recent-events')}</h1>
            </div>
            <div>
                {links.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className="event-link"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Events;