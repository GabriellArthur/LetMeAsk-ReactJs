"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
//webpack
var illustration_svg_1 = require("../assets/images/illustration.svg");
var logo_svg_1 = require("../assets/images/logo.svg");
var google_icon_svg_1 = require("../assets/images/google-icon.svg");
var firebase_1 = require("../services/firebase");
var Button_1 = require("../components/Button");
var useAuth_1 = require("../hooks/useAuth");
require("../styles/auth.scss");
function Home() {
    var history = react_router_dom_1.useHistory();
    var _a = useAuth_1.useAuth(), user = _a.user, signInWithGoogle = _a.signInWithGoogle;
    var _b = react_1.useState(''), roomCode = _b[0], setRoomCode = _b[1];
    function handleCreateRoom() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!user) return [3 /*break*/, 2];
                        return [4 /*yield*/, signInWithGoogle()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        history.push('/rooms/new');
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleJoinRoom(event) {
        return __awaiter(this, void 0, void 0, function () {
            var roomRef;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        if (roomCode.trim() === '') {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, firebase_1.database.ref("rooms/" + roomCode).get()];
                    case 1:
                        roomRef = _a.sent();
                        if (!roomRef.exists()) {
                            alert('Room does not exists.');
                            return [2 /*return*/];
                        }
                        if (roomRef.val().endedAt) {
                            alert('Room already closed.');
                            return [2 /*return*/];
                        }
                        history.push("/rooms/" + roomCode);
                        return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement("div", { id: "page-auth" },
        React.createElement("aside", null,
            React.createElement("img", { src: illustration_svg_1["default"], alt: "Ilustra\u00E7\u00E3o simbolizando perguntas e respostas" }),
            React.createElement("strong", null, "Crie salas de Q&A ao-vivo"),
            React.createElement("p", null, "Tire as d\u00FAvidas da sua audi\u00EAncia em tempo-real")),
        React.createElement("main", null,
            React.createElement("div", { className: "main-content" },
                React.createElement("img", { src: logo_svg_1["default"], alt: "Letmeask" }),
                React.createElement("button", { onClick: handleCreateRoom, className: "create-room" },
                    React.createElement("img", { src: google_icon_svg_1["default"], alt: "Logo do Google" }),
                    "Crie sua sala com o Google"),
                React.createElement("div", { className: "separator" }, "ou entre em uma sala"),
                React.createElement("form", { onSubmit: handleJoinRoom },
                    React.createElement("input", { type: "text", placeholder: "Digite o c\u00F3digo da sala", onChange: function (event) { return setRoomCode(event.target.value); }, value: roomCode }),
                    React.createElement(Button_1.Button, { type: "submit" }, "Entrar na sala"))))));
}
exports.Home = Home;

//# sourceMappingURL=Home.js.map
