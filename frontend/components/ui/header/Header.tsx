import "./Header.css";
import NewNoteButton from "./components/NewNoteButton";
import AvatarMenu from "./components/AvatarMenu";
import SearchBar from "./components/SearchBar";

interface Props {
  onNewNote: () => void;
}

export default function Header({ onNewNote }: Props) {
  return (
    <>
      <div className="header">
        <header className="title">Dev Diary</header>

        <div className="center">
          <SearchBar />
          <NewNoteButton onNewNote={onNewNote} />
        </div>

        <AvatarMenu />
      </div>
    </>
  );
}
