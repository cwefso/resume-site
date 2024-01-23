import Ghost from "./Ghost";

const GhostContainer = ({ setGhostFound, setGhosts, ghosts }: any) => {
  return (
    <div className="ghost-container">
      <div className="ghost">
        <Ghost
          setGhostFound={setGhostFound}
          setGhosts={setGhosts}
          ghosts={ghosts}
        />
      </div>
    </div>
  );
};

export default GhostContainer;
