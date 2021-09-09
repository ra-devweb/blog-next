interface Props {
    title: string
    message: string
    status: string
}

function Notification(props: Props) {
    const { title, message, status } = props;

    let statusClasses = '';

    if (status === 'success') {
        statusClasses = 'alert-success';
    }

    if (status === 'error') {
        statusClasses = 'alert-error';
    }

    const cssClasses = `${'alert mt-4'} ${statusClasses}`;

    return (
        <div className={cssClasses}>
            <div className='flex flex-col md:flex-1 md:flex-row justify-evenly'>
                <h2>{title}</h2>
                <label>{message}</label>
            </div>
        </div>
    );
}

export default Notification;