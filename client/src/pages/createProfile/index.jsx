import Avatars, { Piece } from "avataaars";
import { useRef, useContext, useState } from "react";
import { useHistory } from "react-router";
import firebase from "../../firebase";
import { AuthContext } from "../context/authContext";
import "./index.scss";

const Createprofile = () => {
  const userNameRef = useRef();
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const avatarOptions = {
    avatarStyle: ["Circle", "Transparent"],
    topType: [
      "NoHair",
      "Eyepatch",
      "Hat",
      "Hijab",
      "Turban",
      "WinterHat1",
      "WinterHat2",
      "WinterHat3",
      "WinterHat4",
      "LongHairBigHair",
      "LongHairBob",
      "LongHairBun",
      "LongHairCurly",
      "LongHairCurvy",
      "LongHairDreads",
      "LongHairFrida",
      "LongHairFro",
      "LongHairFroBand",
      "LongHairNotTooLong",
      "LongHairShavedSides",
      "LongHairMiaWallace",
      "LongHairStraight",
      "LongHairStraight2",
      "LongHairStraightStrand",
      "ShortHairDreads01",
      "ShortHairDreads02",
      "ShortHairFrizzle",
      "ShortHairShaggyMullet",
      "ShortHairShortCurly",
      "ShortHairShortFlat",
      "ShortHairShortRound",
      "ShortHairShortWaved",
      "ShortHairSides",
      "ShortHairTheCaesar",
      "ShortHairTheCaesarSidePart",
    ],
    accessoriesType: [
      "Blank",
      "Kurt",
      "Prescription01",
      "Prescription02",
      "Round",
      "Sunglasses",
      "Wayfarers",
    ],
    hairColor: [
      "Auburn",
      "Black",
      "Blonde",
      "BlondeGolden",
      "Brown",
      "BrownDark",
      "PastelPink",
      "Blue",
      "Platinum",
      "Red",
      "SilverGray",
    ],
    facialHairType: [
      "Blank",
      "BeardMedium",
      "BeardLight",
      "BeardMajestic",
      "MoustacheFancy",
      "MoustacheMagnum",
    ],
    clotheType: [
      "BlazerShirt",
      "BlazerSweater",
      "CollarSweater",
      "GraphicShirt",
      "Hoodie",
      "Overall",
      "ShirtCrewNeck",
      "ShirtScoopNeck",
      "ShirtVNeck",
    ],
    clotheColor: [
      "Black",
      "Blue01",
      "Blue02",
      "Blue03",
      "Gray01",
      "Gray02",
      "Heather",
      "PastelBlue",
      "PastelGreen",
      "PastelOrange",
      "PastelRed",
      "PastelYellow",
      "Pink",
      "Red",
      "White",
    ],
    eyeType: [
      "Close",
      "Cry",
      "Default",
      "Dizzy",
      "EyeRoll",
      "Happy",
      "Hearts",
      "Side",
      "Squint",
      "Surprised",
      "Wink",
      "WinkWacky",
    ],
    eyebrowType: [
      "Angry",
      "AngryNatural",
      "Default",
      "DefaultNatural",
      "FlatNatural",
      "RaisedExcited",
      "RaisedExcitedNatural",
      "SadConcerned",
      "SadConcernedNatural",
      "UnibrowNatural",
      "UpDown",
      "UpDownNatural",
    ],
    mouthType: [
      "Concerned",
      "Default",
      "Disbelief",
      "Eating",
      "Grimace",
      "Sad",
      "ScreamOpen",
      "Serious",
      "Smile",
      "Tongue",
      "Twinkle",
      "Vomit",
    ],
    skinColor: [
      "Tanned",
      "Yellow",
      "Pale",
      "Light",
      "Brown",
      "DarkBrown",
      "Black",
    ],
  };

  const [currentStyles, setCurrentStyles] = useState({
    avatarStyle: "Circle",
    topType: "ShortHairShortFlat",
    accessoriesType: "Prescription02",
    hairColor: "BrownDark",
    facialHairType: "Blank",
    clotheType: "Hoodie",
    clotheColor: "PastelBlue",
    eyeType: "Happy",
    eyebrowType: "Default",
    mouthType: "Smile",
    skinColor: "Light",
  });

  const updateValues = (target) => {
    setCurrentStyles((oldValues) => {
      return {
        ...oldValues,
        [target]:
          avatarOptions[target][
            Math.floor(Math.random() * avatarOptions[target].length)
          ],
      };
    });
  };

  const handleSubmit = () => {
    if (!userNameRef.current.value || userNameRef.current.value === "")
      console.log("enter username");
    else {
      firebase
        .database()
        .ref("user/" + userNameRef.current.value)
        .once("value", (snap) => {
          if (!snap.val()) {
            firebase
              .database()
              .ref("user/" + userNameRef.current.value)
              .push({
                email: user.email,
                style: currentStyles,
              })
              .then((data) => {
                history.push("/dashboard");
              });
          } else console.log("username already exist");
        });
    }
  };

  return (
    <div className="scaffold">
      <div className="pageLayout">
        <h2>Create Profile</h2>
        <input
          className="inputBox"
          type="text"
          name="username"
          placeholder="Enter a username"
          ref={userNameRef}
        />
        <Avatars
          style={{ width: "300px", height: "300px" }}
          avatarStyle={currentStyles["avatarStyle"]}
          topType={currentStyles["topType"]}
          accessoriesType={currentStyles["accessoriesType"]}
          hairColor={currentStyles["hairColor"]}
          facialHairType={currentStyles["facialHairType"]}
          clotheType={currentStyles["clotheType"]}
          clotheColor={currentStyles["clotheColor"]}
          eyeType={currentStyles["eyeType"]}
          eyebrowType={currentStyles["eyebrowType"]}
          mouthType={currentStyles["mouthType"]}
          skinColor={currentStyles["skinColor"]}
        />
        <h2>Edit Avatar</h2>
        <div className="avatarItems">
          <div
            className="background-circle"
            onClick={() => {
              updateValues("avatarStyle");
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "dodgerblue",
                borderRadius: "100%",
              }}
            ></div>
          </div>
          <div
            onClick={() => {
              updateValues("mouthType");
            }}
          >
            <Piece pieceType="mouth" pieceSize="200" mouthType="Tongue" />
          </div>
          <div
            on
            onClick={() => {
              updateValues("eyeType");
            }}
          >
            <Piece pieceType="eyes" pieceSize="200" eyeType="Surprised" />
          </div>
          <div
            onClick={() => {
              updateValues("eyebrowType");
            }}
          >
            <Piece
              pieceType="eyebrows"
              pieceSize="200"
              eyebrowType="RaisedExcited"
            />
          </div>
          <div
            onClick={() => {
              updateValues("accessoriesType");
            }}
          >
            <Piece
              pieceType="accessories"
              pieceSize="200"
              accessoriesType="Round"
            />
          </div>
          <div
            onClick={() => {
              updateValues("topType");
            }}
          >
            <Piece
              pieceType="top"
              pieceSize="100"
              topType="LongHairFro"
              hairColor="Red"
            />
          </div>
          <div
            onClick={() => {
              updateValues("facialHairType");
            }}
          >
            <Piece
              pieceType="facialHair"
              pieceSize="130"
              facialHairType="BeardMajestic"
            />
          </div>
          <div
            onClick={() => {
              updateValues("clotheType");
            }}
          >
            <Piece
              pieceType="clothe"
              pieceSize="150"
              clotheType="Hoodie"
              clotheColor="Red"
            />
          </div>
          <div
            onClick={() => {
              updateValues("hairColor");
            }}
          >
            <Piece pieceType="skin" pieceSize="100" skinColor="Black" />
          </div>
          <div
            onClick={() => {
              updateValues("skinColor");
            }}
          >
            <Piece pieceType="skin" pieceSize="100" skinColor="Brown" />
          </div>
          <div
            onClick={() => {
              updateValues("clotheColor");
            }}
          >
            <Piece pieceType="skin" pieceSize="100" skinColor="Yellow" />
          </div>
        </div>
        <button className="button" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Createprofile;
