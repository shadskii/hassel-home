import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Recipe } from './recipe';

@Injectable()
export class RecipesService {

    //TODO: move this to a db
    private recipes = [
        new Recipe('Toffee Squares',
            [
                '2 Cups flour',
                '1 cup brown sugar (packed)',
                '1 teaspoon salt',
                '1 tablespoon vanilla',
                '1 egg', '1 cup butter',
                '8 ounces chocolate',
                'ground walnuts'
            ],
            [
                'Mix flour & butter (etc) in food processor. Pat into lightly buttered 9" x 15" pan.',
                'Bake at 350 degrees. After 15 minutes sprinkle the chocolate and then put back into the oven for 5 more minutes.',
                'Bake 5 minutes more (total 20). As soon as the pan comes out of the oven, spread chocolate.',
                'Sprinkle with walnuts if you want.'
            ],
            'toffee-squares.jpeg'),
        new Recipe('Chocolate Chiffon Pie',
            [
                '1 pkg. (6 ounces) semi-sweet chocolate pieces',
                '1/3 cup sugar',
                '1/3 cup very hot water',
                '1 teaspoon vanilla',
                '4 eggs separated',
                '1 9" baked pie crust (purchased graham cracker or vanilla wafer crust works well)'
            ],
            [
                'Place chocolate, sugar, water & vanilla in blender container. Cover and process until smooth. With blender continuing to run remove feeder cap & slowly add egg yolks. Increase to high speed & process about 60 seconds until thick.',
                'Beat egg whites until stiff peaks form. Carefully fold chocolate mixture into egg whites with wire whisk or rubber spatula. Fold only until combined.',
                'Turn into baked shell. Refrigerate until firm. Makes 8 servings.'
            ],
            'chocolate-chiffon.jpg'),
        new Recipe('Frosting For Brownies',
            [
                '1 Can (14 oz) Borden\'s condensed milk',
                '2 squares Bakers Chocolate',
                '2 tablespoons butter (melted)'
            ],
            [
                'Boil rapidly, stirring until VERY thick, then add: (1 tsp) salt and (1 tsp) vanilla',
                'Spread quickly before it sets.'
            ],
            'frosting.jpg'),
        new Recipe('Chicken Tetrazzini',
            [
                'One 4.5 pound roasting chicken, cut up',
                '3 cups hot water',
                'Salt',
                '1 teaspoon onion salt',
                '½ teaspoon celery salt',
                '½ pound spaghetti',
                '6 tablespoons butter',
                '½ pound mushrooms, sliced',
                '1 tablespoon lemon juice',
                '2 tablespoons flour',
                'Paprika',
                '¼ teaspoon pepper',
                '1/8 teaspoon nutmeg',
                '1 cup heavy cream',
                '2/3 cup grated parmesan cheese',
            ],
            [
                'Day Before In deep kettle: chicken, water, 2 tsp. salt, onion salt, celery salt: simmer covered until fork tender (1 to 1 ¼ hours). Remove chicken and allow to cool. Remove meat from bones in big pieces & cut breasts into thirds. Refrigerate.',
                'From kettle, remove 2 ½ cups broth; to rest of broth add 3 quarts of water & spaghetti. Cook 6 minutes (until tender). Then drain and place spaghetti in 12" x 8" x 2" baking dish.',
                'In Skillet: heat 3 tbs. butter, add mushrooms, sprinkle them with lemon juice and ½ tsp. salt. Saute them until soft but not brown; toss them and their butter with the spaghetti; refrigerate, covered.',
                'In Saucepan: melt 3 tbs. butter and remove from the heat; stir in flour, ¼ tsp. paprika, 1 ½ tsp. salt, pepper & nutmeg. Slowly stir in 2 ½ cups reserved broth (1/4 cup sherry may replace ½ cup broth). Cook sauce, stirring until thickened; then add cream; pour over chicken, Refrigerate all, covered.',
                'Next Day 1 hour before serving - heat oven to 400 degrees F. With fork stir up chicken & sauce, then pour as much sauce as possible over spaghetti while tossing. Now, turn the rest of the chicken mixture into the spaghetti, then sprinkle all with parmesan & paprika. Bake 25 minutes or until hot. Makes 8 servings.'
            ],
            'chicken-tetrazzini.jpg'),
        new Recipe('Oven Stew',
            [
                '2 pounds beef round steak, cut up (1-inch cubes)',
                '2 cups sliced carrots',
                '1 cup sliced celery',
                '2 medium onions, sliced',
                '1 can (6 ounces) water chestnuts, drained and sliced',
                '1 can (6 ounces) sliced mushrooms, drained',
                '3 tablespoons flour',
                '1 tablespoon sugar',
                '1 tablespoon salt',
                '1 can (16 ounces) tomatoes',
                '1 cup red burgundy',
            ],
            [
                'Mix meat, carrots, celery, onions, water chestnuts & mushrooms in Dutch Oven',
                'Mix flour, sugar & salt; stir into meat mixture.',
                'Stir in tomatoes and wine.',
                'Cover tightly.',
                'Cook in 325 degree oven or on top of range for 4 hours.'
            ],
            'oven-stew.jpg'),
        new Recipe('Herb Cheese Bread',
            [
                '1 package dry yeast',
                '1 1/2 tablespoons sugar',
                '1/4 cup warm water (105-115 F)',
                '6 ounces cheddar cheese',
                '3 cups unbleached all-purpose flour',
                '1/4 cup dry milk powder',
                '1/2 teaspoon salt',
                '1/2 teaspoon oregano',
                '1/2 teaspoon rosemary',
                '1 1/2 tablespoons unsalted butter',
                '1 tablespoon Dijon mustard',
                '3/4 cup cold water'
            ],
            [
                'Stir the yeast and sugar into the warm water in a 2-cup liquid measure and let stand for 10 minutes.',
                'Shred the cheese with the medium shredding disc of a food processor. Leave the cheese in the work bowl and insert the metal blade. Add the flour, dry milk, salt, oregano, rosemary and butter and process for about 20 seconds.',
                'Add the mustard and the cold water to the yeast. With the motor running, pour the liquid through the feed tube in a steady stream as fast as the flour mixture absorbs it. Process until the dough is smooth and elastic and just cleans the side of the bowl. (If the dough is too moist to clean the side of the bowl, add flour by tablespoons through the feed tube. If it is too dry, add cold water by teaspoons.) Process about 1 minute more to knead the dough.',
                'With lightly floured hands, transfer the dough to a lightly-floured 1-gallon plastic storage bag and seal with a wire twist, leaving space for the dough to rise. Set aside in a warm place [75-80 deg F] until the dough has doubled in bulk, about 1 hour.',
                'Remove the wire twist and punch down the dough in the bag.',
                'Grease and 8 1/2 by 4 1/2 by 2 1/2-inch rectangular loaf pan. Cover with oiled plastic wrap and let rise until doubled in bulk, about 45 minutes.',
                'Preheat the oven to 350 F.',
                'Bake the bread in the center of the preheated oven for 30 minutes, cover the top loosely with aluminum foil and bake for 10 to 15 minutes more or until the loaf is nicely browned and sounds hollow when tapped.',
                'Remove from the loaf pan and let cool on a wire rack.'
            ],
            'herb-cheese-bread.jpg'),
        new Recipe('Spaghetti alla Carbonara',
            [
                '1 pound spaghetti',
                '6 ounce raw Italian ham or bacon slices',
                '4 medium sized eggs',
                '1/2 cup heavy cream',
                '4 tablespoons freshly grated parmesan',
                'Salt',
                'Freshly-ground black pepper',
                'Extra parmesan to serve'
            ],
            [
                'Bring pot with lots of water to boil - add lots of water & oil to prevent sticking. Add spaghetti - push down, stir once & cook uncovered at a fast simmer until tender - this is not likely to take more than 10 minutes - do not overcook.',
                'While spaghetti is cooking prepare baron or prosciutto. Cut meat into small strips. Cook over low heat in large casserole & increase heat at end.',
                'Break eggs into bowl - season with salt & pepper. Stir in 4 ounces of freshly-grated Parmesan and the cream. Set aside additional grated parmesan for serving on the table.',
                'When spaghetti is cooked, drain thoroughly in a colander. Remove pot from heat, add drained spaghetti, bacon/prosciutto & pour egg mixture over the top. Toss until pasta is coated.',
                'Serve immediately with a bowl of grated parmesan on the side for sprinkling.'
            ],
            'spaghetti-carbonara.jpeg'),
        new Recipe('Potatoes & Sausage au Gratin',
            [
                '2 medium potatoes, peeled',
                '1 cup milk',
                '1/4 cup butter',
                '1 teaspoon salt',
                '1 teaspoon pepper',
                '4 ounces Monterey Jack cheese',
                '4 heast-and-serve sausage links',
                '2 whole green onions'
            ],
            [
                'Preheat oven to 350 degrees and grease an 8-inch square baking dish.',
                'Fit the shredding disk into the work bowl and shred the potatoes.',
                'Place shredded potatoes in a saucepan with milk, butter, salt and pepper.   Simmer until potatoes are tender.',
                'Cut cheese to fit the feed tube.   With shredding disk still attached, shred cheese.   Remove from work bowl and set aside.',
                'Fit the steel knife into the work bowl.   Stand sausage links and green onions on end in the feed tube and slice together.',
                'Pour potato mixture into prepared dish.   Stir in sliced sausage and onions.   Top with shredded cheese.',
                'Bake 30 minutes.   Cut into squares to serve.'
            ],
            'sausage-potatoes-au-groten.jpg')
    ];

    private recipeArray: any[];

    constructor() { }

    getRecipes(): Observable<Recipe[]> {
        return Observable.of(this.recipes);
    }
}