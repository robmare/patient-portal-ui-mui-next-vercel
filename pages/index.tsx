import supertokensNode from 'supertokens-node';
import { backendConfig } from '../config/backendConfig';
import Session, { SessionContainer } from 'supertokens-node/recipe/session';
import { SessionAuth } from 'supertokens-auth-react/recipe/session';
import ProtectedPage from './protectedPage';

export async function getServerSideProps(context: { req: any; res: any }) {
  // this runs on the backend, so we must call init on supertokens-node SDK
  supertokensNode.init(backendConfig());

  let session: SessionContainer;

  try {
    session = await Session.getSession(context.req, context.res, {
      overrideGlobalClaimValidators: async function () {
        return [];
      },
    });
  } catch (err: any) {
    if (err.type === Session.Error.TRY_REFRESH_TOKEN) {
      return { props: { fromSupertokens: 'needs-refresh' } }
    } else if (err.type === Session.Error.UNAUTHORISED) {
      // this will force the frontend to try and refresh which will fail
      // clearing all cookies and redirecting the user to the login screen.
      return { props: { fromSupertokens: 'needs-refresh' } }
    }
    throw err;
  }

  return {
    props: { userId: session.getUserId() },
  }
}

export default function Home(props: { userId: any }) {
  return (
    <SessionAuth>
        <ProtectedPage userId={props.userId} />
    </SessionAuth>
  )
}