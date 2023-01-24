interface Props {
    src?: string;
}

const IFrameApp = (props: Props) => {

    const {
        src
    } = props;

    return src ? (
        <div
            id={"iframeApp"}
            style={{
                width: "100%",
                height: "100%"
            }}
        >
            <iframe
                src={src}
                width={"100%"}
                height={"100%"}
                style={{
                    border: "none"
                }}
            />
        </div>
    ) : null;
}

export default IFrameApp;