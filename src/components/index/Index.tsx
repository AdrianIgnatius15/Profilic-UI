import { observer } from "mobx-react-lite";
import Header from "../header/Header";
import { useStore } from "../../stores/contextStore/store.context";
import Landing from "../../pages/Landing";
import Home from "../../pages/Home";

export default observer(function Index(): JSX.Element {
    const { accountStore } = useStore();
    const { user } = accountStore;
    return (
        <>
            <Header />
            {user === null && <Landing />}
            {user !== null && <Home />}
        </>
    );
});
