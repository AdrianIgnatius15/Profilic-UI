import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/contextStore/store.context";
import Landing from "../../pages/Landing";
import Home from "../../pages/Home";

export default observer(function Index(): JSX.Element {
    const { accountStore } = useStore();
    const { user } = accountStore;
    return (
        <>
            {user === null && <Landing />}
            {user !== null && <Home />}
        </>
    );
});
