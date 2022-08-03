import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((directory) => (
                <DirectoryItem key={directory.id} directory={directory} />
            ))}
        </div>
    );
};

export default Directory;
