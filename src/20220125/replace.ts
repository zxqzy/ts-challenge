type Replace<S extends string, From extends string, To extends string> =
  S extends `${infer F}${From}${infer L}` ? `${F}${To}${L}` : S

  type replaced = Replace<'types are fun!', 'fun', 'awesome'>
