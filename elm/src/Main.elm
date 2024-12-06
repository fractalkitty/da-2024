module Main exposing (main)

import Browser
import Browser.Events exposing (onAnimationFrame)
import Html exposing (Html)
import Html.Attributes as Attr
import Random
import Svg exposing (circle, g, svg)
import Svg.Attributes exposing (cx, cy, fill, height, opacity, r, transform, viewBox, width)
import Time



-- MAIN


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


type alias Model =
    { time : Float
    , stars : List Star
    }


type alias Star =
    { x : Float
    , y : Float
    , vx : Float
    , vy : Float
    , lifetime : Float
    }


init : () -> ( Model, Cmd Msg )
init _ =
    ( { time = 0
      , stars = []
      }
    , generateStar
    )



-- UPDATE


type Msg
    = Tick Float
    | NewStar Star


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Tick delta ->
            ( { model
                | time = model.time + delta
                , stars = updateStars model.stars
              }
            , generateStar
            )

        NewStar star ->
            ( { model
                | stars = star :: model.stars
              }
            , Cmd.none
            )


updateStars : List Star -> List Star
updateStars stars =
    stars
        |> List.filter (\p -> p.lifetime > 0)
        |> List.map updateStar


updateStar : Star -> Star
updateStar star =
    { star
        | x = star.x + star.vx
        , y = star.y + star.vy
        , lifetime = star.lifetime - 5
    }


generateStar : Cmd Msg
generateStar =
    Random.generate NewStar starGenerator


starGenerator : Random.Generator Star
starGenerator =
    Random.map5 Star
        (Random.float -4 4)
        --x
        (Random.float -4 4)
        --y
        (Random.float -0.05 0.05)
        --vx
        (Random.float -0.05 0.05)
        --vy
        (Random.float 50 300)



-- Lifetime
-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    onAnimationFrame (\time -> Tick (Time.posixToMillis time |> toFloat))



-- VIEW


view : Model -> Html Msg
view model =
    svg
        [ width "100%"
        , height "100%"
        , viewBox "0 0 100 100"
        ]
        [ g [ transform "translate(48, 32)" ]
            [ circle
                [ cx "0"
                , cy "100"
                , r "20"
                , fill "black"
                , opacity "0.9"
                ]
                []
            , g [] (List.map viewStar model.stars)
            ]
        ]


viewStar : Star -> Svg.Svg msg
viewStar star =
    circle
        [ cx (String.fromFloat star.x)
        , cy (String.fromFloat star.y)
        , r "0.25"
        , fill "white"
        , opacity (String.fromFloat (star.lifetime / 100))
        ]
        []
