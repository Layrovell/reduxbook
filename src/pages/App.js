import React, {useEffect} from "react";
import '../App.scss';
import '../styles/reset.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../store/actions";
import {Link} from "react-router-dom";
import {Loader} from "../components/Loader/Loader";
import {UsersTable} from "../components/UserTable/UsersTable";

function App() {
    const users = useSelector(state => state.users.items);
    const isFetching = useSelector(state => state.users.isFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
      <>
          <article className="book">
              <Link to={`/book/add`} className='btn btn-add'>add</Link>

              {isFetching
                ? <Loader/>
                : <UsersTable users={users}/>
              }
          </article>
      </>
    );
}

export default App;
