import ArchiveItem from "./ArchiveItem";

function Archive(){
    return(
        <div className="main-data">
            <div className="data">
                <div className="archiveData">
                    <ArchiveItem/>
                    <ArchiveItem/>
                    <ArchiveItem/>
                    <ArchiveItem/>
                    <ArchiveItem/>
                    <ArchiveItem/>
                    <ArchiveItem/>
                    <ArchiveItem/>
                    <ArchiveItem/>
                    <ArchiveItem/>
                    <ArchiveItem/>
                    <ArchiveItem/>
                    <ArchiveItem/>
                    <ArchiveItem/>
                </div>
                <div className="pagination">
                    <div className="buttons">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Archive;
