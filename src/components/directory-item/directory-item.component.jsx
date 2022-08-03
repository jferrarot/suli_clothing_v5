import {
    BackgroundImage,
    Body,
    DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ directory }) => {
    const { imageUrl, title } = directory;
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
