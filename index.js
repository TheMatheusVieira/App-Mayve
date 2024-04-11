import React from 'react';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

export default function Index({topo, detalhes}) {
  return <>
    <Topo {...topo} />
    <Detalhes {...detalhes} />
  </>
}

