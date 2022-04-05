type MyLength<T extends any[]> = T["length"]

type tesla = ['tesla', 'model 3', 'model X', 'model Y']

type Test = MyLength<tesla>
