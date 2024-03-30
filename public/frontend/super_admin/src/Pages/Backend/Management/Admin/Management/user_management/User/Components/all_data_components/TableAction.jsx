import React from 'react'
// import setup from '../../Config/setup';

function TableAction({data}) {
    // const { delete_data, restore_data } = setup.actions;
    return (
        <>
            <div className="table_actions">
                <a href="#" className="btn btn-sm btn-outline-secondary">
                    <span className="material-symbols-outlined fill">
                        settings
                    </span>
                </a>
                <ul>
                    {/* <li>
                        <a href="">
                            <span className="material-symbols-outlined">
                                visibility
                            </span>
                            Quick View
                        </a>
                    </li> */}
                    <li>
                        <a className="">
                            <span className="material-symbols-outlined">
                                mystery
                            </span>
                            Details
                        </a>
                    </li>
                    <li>
                        <a className="">
                            <span className="material-symbols-outlined">
                                edit_square
                            </span>
                            Edit
                        </a>
                    </li>
                    {
                        1 == 1 ?
                            <li>
                                <a >
                                    <i className="material-symbols-outlined">
                                        delete
                                    </i>
                                    Deactive
                                </a>
                            </li>
                            :
                            <li>
                                <a >
                                    <i className="material-symbols-outlined">
                                        restore
                                    </i>
                                    Restore
                                </a>
                            </li>
                    }
                </ul>
            </div>
        </>
    )
}

export default TableAction