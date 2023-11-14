import React, { useState } from 'react'
import HelpOffCanva from '../OffCanvas/HelpOffCanva'

export default function ProfileHelp() {
    const [showHelpPage, setShowHelpPage] = useState(false);
   const handleShowHelpPage = () => setShowHelpPage(true);
   const handleCloseHelpPage = () => setShowHelpPage(false);
    return (
        <>
            <div data-bs-toggle="offcanvas" data-bs-target="#help" aria-controls="help" className="bg-white p-3" onClick={handleShowHelpPage}>
                <div className="d-flex gap-3 align-items-center">
                    <i className="bi bi-question-circle fs-5 text-muted"></i>
                    <span>
                        <p className="m-0 small text-muted">Aides</p>
                        <p className="m-0">FAQs & Links</p>
                    </span>
                    <a href="#" className="text-primary ms-auto d-flex"><i className="bi bi-chevron-right fs-6"></i></a>
                </div>
            </div>
            <HelpOffCanva showHelpPage={showHelpPage} handleCloseHelpPage={handleCloseHelpPage} />

        </>
    )
}
