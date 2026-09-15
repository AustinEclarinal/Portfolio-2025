import {NavLink, Group} from '@mantine/core';

export function Navbar(){
    return(
<Group>
<NavLink href="#Home" label ="About"></NavLink>
<NavLink href="#Projects" label ="Projects"></NavLink>
<NavLink href="#Experience" label ="Experience"></NavLink>
<NavLink href="" label ="Contact"></NavLink>
</Group>
);
}