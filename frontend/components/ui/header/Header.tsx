import "./Header.css";
import NewNoteButton from "./components/NewNoteButton";
import AvatarMenu from "./components/AvatarMenu";
import SearchBar from "./components/SearchBar";

export default function Header() {
  return (
    <>
      <div className="header">
        <header className="title">Dev Diary</header>

        <div className="center">
          <SearchBar />
          <NewNoteButton />
        </div>

        <AvatarMenu />
      </div>
    </>
  );
}
